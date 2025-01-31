import path from 'path'
import { ResolveDependency, ResolveDependencyReturn } from '../utils/resolveDependency'
import { PluginConfig } from './generateInterceptor'
import { parseSync } from './swc'
import { ExportAllDeclaration } from '@swc/core'

function parseAndFindExport(
  resolved: ResolveDependencyReturn,
  findExport: string,
  resolve: ResolveDependency,
): ResolveDependencyReturn {
  if (!resolved?.source) return undefined
  const ast = parseSync(resolved.source)

  for (const node of ast.body) {
    if (node.type === 'ExportDeclaration') {
      switch (node.declaration.type) {
        case 'ClassDeclaration':
        case 'FunctionDeclaration':
          if (node.declaration.identifier.value === findExport) return resolved
          break
        case 'VariableDeclaration':
          for (const declaration of node.declaration.declarations) {
            if (declaration.type === 'VariableDeclarator') {
              if (declaration.id.type === 'Identifier') {
                if (declaration.id.value === findExport) return resolved
              } else {
                console.log(declaration)
              }
            }
          }
          break
      }
    }
  }

  const exports = ast.body
    .filter((node): node is ExportAllDeclaration => node.type === 'ExportAllDeclaration')
    .sort((a, b) => {
      const probablyA = a.source.value.includes(findExport)
      const probablyB = b.source.value.includes(findExport)
      // eslint-disable-next-line no-nested-ternary
      return probablyA === probablyB ? 0 : probablyA ? -1 : 1
    })

  for (const node of exports) {
    const isRelative = node.source.value.startsWith('.')
    if (isRelative) {
      const d =
        resolved.dependency === resolved.denormalized
          ? resolved.dependency.substring(0, resolved.dependency.lastIndexOf('/'))
          : resolved.dependency

      const newPath = path.join(d, node.source.value)

      const resolveResult = resolve(newPath, { includeSources: true })
      // eslint-disable-next-line no-continue
      if (!resolveResult) continue

      const newResolved = parseAndFindExport(resolveResult, findExport, resolve)

      if (newResolved && resolved.dependency !== newResolved.dependency) return newResolved
    }
  }

  return undefined
}

const cachedResults = new Map<string, ResolveDependencyReturn>()

export function findOriginalSource(
  plug: PluginConfig,
  resolved: ResolveDependencyReturn,
  resolve: ResolveDependency,
):
  | { resolved: NonNullable<ResolveDependencyReturn>; error: undefined }
  | { resolved: undefined; error: Error } {
  if (!resolved?.source)
    return {
      resolved: undefined,
      error: new Error(`Could not resolve ${plug.targetModule}`),
    }

  // const cacheKey = `${plug.targetModule}#${plug.targetExport}`
  // if (cachedResults.has(cacheKey)) {
  //   return {
  //     resolved: cachedResults.get(cacheKey) as NonNullable<ResolveDependencyReturn>,
  //     error: undefined,
  //   }
  // }

  const newResolved = parseAndFindExport(resolved, plug.targetExport, resolve)

  if (!newResolved) {
    return {
      resolved: undefined,
      error: new Error(
        `Can not find ${plug.targetModule}#${plug.sourceExport} for plugin ${plug.sourceModule}`,
      ),
    }
  }

  // cachedResults.set(cacheKey, newResolved)
  return { resolved: newResolved, error: undefined }
}

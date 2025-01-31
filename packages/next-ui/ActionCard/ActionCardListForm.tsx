/* eslint-disable import/no-extraneous-dependencies */
import {
  Controller,
  ControllerProps,
  FieldValues,
  useController,
} from '@graphcommerce/react-hook-form'
import React, { MouseEventHandler } from 'react'
import { ActionCardProps } from './ActionCard'
import { ActionCardList, ActionCardListProps } from './ActionCardList'

export type ActionCardItemBase = Pick<ActionCardProps, 'value'>

export type ActionCardItemRenderProps<T> = ActionCardProps & {
  onReset: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLSpanElement>
} & T

export type ActionCardListFormProps<A, F extends FieldValues = FieldValues> = Omit<
  ActionCardListProps,
  'value' | 'error' | 'onChange' | 'children'
> &
  Omit<ControllerProps<F>, 'render'> & {
    items: A[]
    render: React.FC<ActionCardItemRenderProps<A>>
  }

export function ActionCardListForm<
  T extends ActionCardItemBase,
  F extends FieldValues = FieldValues,
>(props: ActionCardListFormProps<T, F>) {
  const {
    required,
    rules,
    items,
    render,
    control,
    name,
    errorMessage,
    defaultValue,
    multiple,
    ...other
  } = props
  const RenderItem = render as React.FC<ActionCardItemRenderProps<ActionCardItemBase>>

  function onSelect(itemValue: unknown, selectValues: unknown) {
    return multiple
      ? Array.isArray(selectValues) && selectValues.some((selectValue) => selectValue === itemValue)
      : selectValues === itemValue
  }

  const {
    field: { onChange, value, ref },
    fieldState,
    formState,
  } = useController({
    ...props,
    control,
    name,
    defaultValue,
    rules: { required: errorMessage || required, ...rules },
  })

  return (
    <ActionCardList
      {...other}
      multiple={multiple}
      required={required}
      value={value}
      ref={ref}
      onChange={(_, incomming) => onChange(incomming)}
      error={formState.isSubmitted && !!fieldState.error}
      errorMessage={fieldState.error?.message}
    >
      {items.map((item) => (
        <RenderItem
          {...item}
          key={item.value ?? ''}
          value={item.value}
          selected={onSelect(item.value, value)}
          onReset={(e) => {
            e.preventDefault()
            onChange(null)
          }}
        />
      ))}
    </ActionCardList>
  )
}

import { Chip, Menu, ChipProps, makeStyles, ListSubheader, Theme } from '@material-ui/core'
import RemoveCircle from '@material-ui/icons/Cancel'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import React, { useState, PropsWithChildren } from 'react'
import responsiveVal from '../Styles/responsiveVal'

export const useChipMenuStyles = makeStyles(
  (theme: Theme) => ({
    chip: {
      '& .MuiChip-label': {
        maxWidth: 148,
      },
      '&:focus': {
        background: '#FFF !important',
      },
    },
    chipSelected: {
      border: `1px solid ${theme.palette.primary.contrastText}`,
      background: '#F4F4F4',
      color: theme.palette.primary.contrastText,
      '&:hover': {
        background: '#FFF !important',
        borderColor: '#555',
        '& svg': {
          color: '#555 !important',
        },
      },
      '&:focus': {
        background: '#F4F4F4 !important',
      },
      '& svg': {
        color: ` ${theme.palette.primary.contrastText} !important`,
      },
    },
    menu: {
      minWidth: responsiveVal(200, 560),
      maxWidth: 560,
      padding: '8px 24px',
      marginTop: 16,
      '& a': {
        padding: '4px 16px',
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: 0,
        maxWidth: '100%',
        width: '100%',
        left: '0 !important',
      },
    },
    chipHeader: {
      fontWeight: 500,
      letterSpacing: 1,
      textTransform: 'uppercase',
      fontSize: 14,
      position: 'relative',
      color: theme.palette.secondary.mutedText,
      padding: theme.spacings.xxs,
      paddingLeft: 0,
      marginBottom: 16,
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  }),
  { name: 'ChipMenu' },
)

export type ChipMenuProps = PropsWithChildren<Omit<ChipProps, 'children'>> & {
  selectedLabel?: string
  selected: boolean
}

export default function ChipMenu(props: ChipMenuProps) {
  const { children, selected, onDelete, label, selectedLabel, ...chipProps } = props
  const [openEl, setOpenEl] = useState<null | HTMLElement>(null)
  const classes = useChipMenuStyles(props)

  let deleteIcon = selected ? <RemoveCircle fontSize='small' /> : <ExpandMore fontSize='small' />
  if (openEl) deleteIcon = <ExpandLess fontSize='small' />

  const selectedAndMenuHidden = selected && !openEl && selectedLabel

  return (
    <>
      <Chip
        variant='default'
        color={selected || openEl ? 'primary' : 'default'}
        clickable
        onDelete={onDelete || ((event) => setOpenEl(event.currentTarget.parentElement))}
        onClick={(event) => setOpenEl(event.currentTarget)}
        deleteIcon={deleteIcon}
        {...chipProps}
        label={selectedLabel ?? label}
        className={clsx(
          classes.chip,
          chipProps.className,
          selectedAndMenuHidden && classes.chipSelected,
        )}
      />
      <Menu
        anchorEl={openEl}
        open={!!openEl}
        onClose={() => setOpenEl(null)}
        getContentAnchorEl={null} // https://github.com/mui-org/material-ui/issues/7961#issuecomment-326116559
        variant='selectedMenu'
        anchorPosition={{ top: 6, left: 0 }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        classes={{ paper: classes.menu }}
      >
        <div className={classes.chipHeader}>{label}</div>

        {children}
      </Menu>
    </>
  )
}

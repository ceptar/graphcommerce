import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Theme, vpCalc } from 'components/Theme'
import Asset from 'components/Asset'
import RichText from 'components/RichText'
import { RowHeroProps } from '.'

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      gridColumnGap: theme.gridSpacing.gutter,
      gridRowGap: theme.gridSpacing.row,
      display: `grid`,
      gridTemplateColumns: `repeat(2,1fr)`,
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: `repeat(2,1fr)`,
      },
      alignItems: 'center',
      paddingBottom: vpCalc(24, 160),
      paddingTop: vpCalc(70, 160),
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: theme.palette.divider,
    },
    video: {
      width: '100%',
      height: '100%',
      minHeight: '60vh',
      objectFit: 'cover',
    },
  }),
  { name: 'RowHeroReversed' },
)

const RowHeroReversed: React.FC<RowHeroProps> = (props) => {
  const { text, asset } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <RichText {...text} />
      </div>
      <div>{asset && <Asset asset={asset} className={classes.video} />}</div>
    </div>
  )
}

export default RowHeroReversed

import React from 'react'
import { Theme } from '@material-ui/core'
import makeStyles from '@material-ui/styles/makeStyles'
import Paper from '@material-ui/core/Paper'
import { GQLRowPeopleWithTextFragment } from '../../generated/graphql'
import FilestackPicture from '../FilestackPicture'
import Container from '../Container'
import LinkInternal from '../LinkInternal/LinkInternal'
import { MimeTypes } from '../PictureResponsive'
import { vpCalc } from '../Theme'
import RichText from '../RichText'

const useContainerStyles = makeStyles<Theme>((theme: Theme) => ({
  after: { backgroundColor: theme.palette.grey[300] },
}))

const useStyles = makeStyles<Theme>((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    display: 'grid',
    padding: vpCalc(16, 64),
    gridRowGap: vpCalc(8, 32),
    gridColumnGap: vpCalc(8, 32),
    justifyContent: 'space-around',
    gridTemplateColumns: `repeat(auto-fill, ${vpCalc(80, 120)})`,
    '& img': {
      width: vpCalc(80, 120),
      height: 'auto',
      display: 'block',
      mixBlendMode: 'multiply',
    },
  },
}))

const RowPeopleWithText: React.FC<GQLRowPeopleWithTextFragment> = ({ links, text, personList }) => {
  const container = useContainerStyles()
  const classes = useStyles()

  const Left = () => (
    <>
      <RichText {...text} />

      {links.map((link) => (
        <LinkInternal {...link} key={link.id} />
      ))}
    </>
  )

  const Right = () => (
    <Paper elevation={10} className={classes.paper}>
      {personList?.people.map(({ avatar }) => (
        <FilestackPicture
          src={avatar.url}
          type={(avatar.mimeType as MimeTypes) ?? 'image/png'}
          width={83}
          height={((avatar.height || 1) / (avatar.width || 1)) * 83}
          key={avatar.id}
        />
      ))}
    </Paper>
  )

  return (
    <Container left={<Left />} right={<Right />} leftWidth={0.5} classes={container} spaceBetween />
  )
}

export default RowPeopleWithText

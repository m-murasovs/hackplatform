import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import Image from 'components/generic/Image'

import MiscUtils from 'utils/misc'

const useStyles = makeStyles(theme => ({
    wrapper: {
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        flex: 1,
    },
    top: {
        height: '148px',
        position: 'relative',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    bottom: {
        padding: theme.spacing(2),
    },
}))

const EventsGridItem = ({ event, buttons }) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.top}>
                <Image
                    className={classes.image}
                    defaultImage={require('assets/images/default_cover_image.png')}
                    publicId={event?.coverImage?.publidId}
                    transformation={{
                        width: 400,
                    }}
                />
            </div>
            <div className={classes.bottom}>
                <Typography variant="button">
                    {MiscUtils.formatDateInterval(
                        event?.startTime,
                        event?.endTime
                    )}
                </Typography>
                <Typography variant="h6">{event.name}</Typography>
                <Typography variant="body1">
                    {event?.eventType === 'physical'
                        ? `${event?.eventLocation?.city}, ${event?.eventLocation?.country}`
                        : 'Online'}
                </Typography>
                <Box mt={1} />
                <Box display="flex" flexDirection="row" flexWrap="wrap">
                    {buttons?.map((btn, index) => (
                        <Box key={index} mr={1} mb={1}>
                            {btn}
                        </Box>
                    ))}
                </Box>
            </div>
        </div>
    )
}

export default EventsGridItem

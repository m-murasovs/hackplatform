import React from 'react'

import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { Grid, Box, Typography } from '@material-ui/core'
import EventCard from 'components/events/EventCard'
import Button from 'components/generic/Button'

export default ({ events }) => {
    const dispatch = useDispatch()

    return (
        <Box mt={3}>
            <Typography variant="h6" gutterBottom>
                Your events
            </Typography>
            <Grid container spacing={3}>
                {events.map(event => (
                    <Grid item xs={12} md={6} lg={4}>
                        <EventCard
                            event={event}
                            buttons={[
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            push(`/organise/${event.slug}`)
                                        )
                                    }
                                >
                                    Manage
                                </Button>,
                            ]}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

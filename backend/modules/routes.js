const { JsonSchemas } = require('@hackjunction/shared')

const authRouter = require('./auth/routes')
const uploadRouter = require('./upload/routes')
const userProfileRouter = require('./user-profile/routes')
const recruitmentRouter = require('./recruitment/routes')
const registrationRouter = require('./registration/routes')
const newsletterRouter = require('./newsletter/routes')
const teamRouter = require('./team/routes')
const devToolsRouter = require('./devtools/routes')
const filterGroupRouter = require('./filter-group/routes')
const adminRouter = require('./admin/routes')
const projectRouter = require('./project/routes')
const gavelRouter = require('./reviewing/gavel/routes')
const winnerVoteRouter = require('./winner-votes/routes')
const rankingsRouter = require('./rankings/routes')

module.exports = async fastify => {
    /** Set up docs and Swagger JSON endpoint */
    fastify.register(require('./docs'))
    fastify.register(require('./email-task/routes'), {
        prefix: `/email`,
    })
    fastify.register(require('./event/routes'), {
        prefix: `/events`,
    })
    fastify.register(require('./user-profile/routes'), {
        prefix: `/user-profiles`,
    })
    fastify.register(require('./registration/routes'), {
        prefix: `/registrations`,
    })
}

// module.exports = function(app) {
//     app.get('/api', (req, res) => {
//         res.status(200).json({
//             message: 'Hello!'
//         });
//     });
//     app.use('/api/auth', authRouter);
//     app.use('/api/email', emailRouter);
//     app.use('/api/newsletter', newsletterRouter);
//     app.use('/api/upload', uploadRouter);
//     app.use('/api/winner-votes', winnerVoteRouter);

//     /** Model related routes */
//     app.use('/api/rankings', rankingsRouter);
//     app.use('/api/events', eventRouter);
//     app.use('/api/filter-groups', filterGroupRouter);
//     app.use('/api/registrations', registrationRouter);
//     app.use('/api/teams', teamRouter);
//     app.use('/api/projects', projectRouter);
//     app.use('/api/user-profiles', userProfileRouter);
//     app.use('/api/recruitment', recruitmentRouter);

//     /** Reviewing methods */
//     app.use('/api/reviewing/gavel', gavelRouter);

//     /** Admin tools */
//     app.use('/api/admin', adminRouter);

//     /** Admin tools (development only) */
//     if (global.gConfig.DEVTOOLS_ENABLED) {
//         app.use('/api/devtools', devToolsRouter);
//     }
// };

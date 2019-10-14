'use strict'

// Servicio de Sequelize
const connectionDB = require('./lib/db')

// Modelos
const setupAimModel = require('./models/aim')
const setupAnswerModel = require('./models/answer')
const setupGeopoliticModel = require('./models/geopolitics')
const setupCommunityFundModel = require('./models/community_fund')
const setupCountryModel = require('./models/country')
const setupDebateModel = require('./models/debate')
const setupDenunciasModel = require('./models/denuncias')
const setupDonationsModel = require('./models/donations')
const setupOpinionModel = require('./models/opinion')
const setupOrganizationModel = require('./models/organization')
const setupPointOfView = require('./models/point_of_view')
const setupPollModel = require('./models/poll')
const setupQuestionAimModel = require('./models/question')
const setupResourceHumanModel = require('./models/resources_humans')
const setupResourceMaterialModel = require('./models/resources_materials')
const setupStateModel = require('./models/state')
const setupStaticModel = require('./models/static')
const setupSubAnswerModel = require('./models/subanswer')
const setupSubQuestionModel = require('./models/subquestion')
const setupUserModel = require('./models/user')

// Servicios
const GeopoliticService = require('./lib/geopolitic')
const CountryService = require('./lib/country')
const StateService = require('./lib/state')
const UserService = require('./lib/user')
const DebateService = require('./lib/debate')

const debug = require('debug')('geounity:db:index')

if (process.env.NODE_ENV !== 'production') {
  require('longjohn') // Longjohn entrega mas información cuando ocurre un error.
}

module.exports = async function (config) {
  // Instancia de sequelize
  const sequelize = connectionDB(config)

  // Instancias de los modelos
  const AimModel = setupAimModel(config)
  const AnswerModel = setupAnswerModel(config)
  const GeopoliticModel = setupGeopoliticModel(config)
  const CommunityFundModel = setupCommunityFundModel(config)
  const CountryModel = setupCountryModel(config)
  const DebateModel = setupDebateModel(config)
  const DenunciasModel = setupDenunciasModel(config)
  const DonationsModel = setupDonationsModel(config)
  const OpinionModel = setupOpinionModel(config)
  const OrganizationModel = setupOrganizationModel(config)
  const PointOfViewModel = setupPointOfView(config)
  const PollModel = setupPollModel(config)
  const QuestionAimModel = setupQuestionAimModel(config)
  const ResourceHumanModel = setupResourceHumanModel(config)
  const ResourceMaterialModel = setupResourceMaterialModel(config)
  const StateModel = setupStateModel(config)
  const StaticModel = setupStaticModel(config)
  const SubAnswerModel = setupSubAnswerModel(config)
  const SubQuestionModel = setupSubQuestionModel(config)
  const UserModel = setupUserModel(config)

  // Relaciones
  AimModel.belongsTo(UserModel)
  AimModel.belongsToMany(DebateModel, { through: 'R_debate_aim' })
  AimModel.hasMany(QuestionAimModel)
  AimModel.hasOne(ResourceHumanModel)
  AimModel.hasOne(ResourceMaterialModel)
  AimModel.hasOne(CommunityFundModel)
  AnswerModel.belongsTo(UserModel)
  AnswerModel.belongsTo(QuestionAimModel)
  AnswerModel.hasMany(SubQuestionModel)
  CommunityFundModel.belongsTo(AimModel)
  CommunityFundModel.belongsTo(UserModel)
  CommunityFundModel.hasMany(DonationsModel)
  CountryModel.hasMany(StateModel)
  CountryModel.belongsTo(GeopoliticModel)
  DebateModel.belongsTo(UserModel)
  DebateModel.belongsToMany(AimModel, { through: 'R_debate_aim' })
  DebateModel.hasMany(PointOfViewModel)
  DebateModel.belongsToMany(PollModel, { through: 'R_debate_poll' })
  DonationsModel.belongsTo(UserModel)
  DonationsModel.belongsTo(CommunityFundModel)
  GeopoliticModel.belongsToMany(UserModel, { through: 'R_user_geopolitic' })
  GeopoliticModel.hasMany(AimModel)
  GeopoliticModel.hasMany(DebateModel)
  GeopoliticModel.hasMany(PollModel)
  OpinionModel.belongsTo(UserModel)
  OpinionModel.belongsTo(PointOfViewModel)
  OpinionModel.belongsToMany(StaticModel, { through: 'R_static_opinion' })
  OrganizationModel.belongsToMany(UserModel, {
    through: 'R_user_organization'
  })
  OrganizationModel.hasMany(AimModel)
  OrganizationModel.hasMany(DebateModel)
  OrganizationModel.hasMany(PollModel)
  PointOfViewModel.belongsTo(DebateModel)
  PointOfViewModel.belongsTo(GeopoliticModel)
  PointOfViewModel.belongsTo(OrganizationModel)
  PollModel.belongsTo(UserModel)
  PollModel.belongsToMany(DebateModel, { through: 'R_debate_poll' })
  PollModel.belongsTo(GeopoliticModel)
  QuestionAimModel.belongsTo(UserModel)
  QuestionAimModel.belongsTo(AimModel)
  QuestionAimModel.hasMany(AnswerModel)
  ResourceHumanModel.belongsToMany(UserModel, { through: 'R_rh_user' })
  ResourceHumanModel.belongsTo(AimModel)
  ResourceMaterialModel.belongsTo(AimModel)
  StateModel.belongsTo(CountryModel)
  StateModel.belongsTo(GeopoliticModel)
  StaticModel.belongsToMany(OpinionModel, { through: 'R_static_opinion' })
  SubAnswerModel.belongsTo(UserModel)
  SubAnswerModel.belongsToMany(SubQuestionModel, {
    through: 'R_subquestion_subanswer'
  })
  SubQuestionModel.belongsTo(UserModel)
  SubQuestionModel.belongsTo(AnswerModel)
  SubQuestionModel.belongsToMany(SubAnswerModel, {
    through: 'R_subquestion_subanswer'
  })
  UserModel.belongsToMany(GeopoliticModel, { through: 'R_user_geopolitic' })
  UserModel.belongsToMany(OrganizationModel, { through: 'R_user_organization' })
  UserModel.hasMany(AimModel)
  UserModel.hasMany(DebateModel)
  UserModel.hasMany(PollModel)
  UserModel.hasMany(OpinionModel)
  UserModel.hasMany(QuestionAimModel)
  UserModel.hasMany(SubQuestionModel)
  UserModel.hasMany(AnswerModel)
  UserModel.belongsToMany(ResourceHumanModel, { through: 'R_rh_user' })
  UserModel.hasMany(DonationsModel)
  UserModel.hasMany(CommunityFundModel)
  UserModel.hasMany(DenunciasModel)

  await sequelize.authenticate()

  if (config.setup) {
    debug(`SETUP TRUE: ${config.setup}`)
    await sequelize.sync({ force: true })
  }

  const Aim = {}
  const Answer = {}
  const CommunityFund = {}
  const Country = CountryService(CountryModel)
  const Debate = DebateService(DebateModel, UserModel, GeopoliticModel)
  const Denuncias = {}
  const Donation = {}
  const Geopolitic = GeopoliticService(GeopoliticModel)
  const Opinion = {}
  const Organization = {}
  const PointOfView = {}
  const Poll = {}
  const QuestionAim = {}
  const ResourceHuman = {}
  const ResourceMaterial = {}
  const SubQuestion = {}
  const State = StateService(StateModel)
  const Static = {}
  // const Subquestion = {}
  const User = UserService(UserModel)

  return {
    Aim,
    Answer,
    CommunityFund,
    Country,
    Debate,
    Denuncias,
    Donation,
    Geopolitic,
    Opinion,
    Organization,
    PointOfView,
    Poll,
    QuestionAim,
    ResourceHuman,
    ResourceMaterial,
    State,
    Static,
    SubQuestion,
    User
  }
}

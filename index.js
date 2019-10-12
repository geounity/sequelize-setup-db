// Servicio de Sequelize
import connectionDB from './lib/db'

// Modelos
import setupAimModel from './models/aim'
import setupAnswerModel from './models/answer'
import setupGeopoliticModel from './models/geopolitics'
import setupCommunityFundModel from './models/community_fund'
import setupCountryModel from './models/country'
import setupDebateModel from './models/debate'
import setupDenunciasModel from './models/denuncias'
import setupDonationsModel from './models/donations'
import setupOpinionModel from './models/opinion'
import setupOrganizationModel from './models/organization'
import setupPointOfView from './models/point_of_view'
import setupPollModel from './models/poll'
import setupQuestionAimModel from './models/question'
import setupResourceHumanModel from './models/resources_humans'
import setupResourceMaterialModel from './models/resources_materials'
import setupStateModel from './models/state'
import setupStaticModel from './models/static'
import setupSubAnswerModel from './models/subanswer'
import setupSubQuestionModel from './models/subquestion'
import setupUserModel from './models/user'

// Servicios
import GeopoliticService from './lib/geopolitic'
import CountryService from './lib/country'
import StateService from './lib/state'
import UserService from './lib/user'
import DebateService from './lib/debate'

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

  debug(`SETUP: ${config.setup}`)
  if (config.setup) {
    await sequelize.sync({ force: true })
  }
  debug('--FINISH SYNC--')

  const Aim = {}
  const Answer = {}
  const CommunityFund = {}
  const Country = CountryService(CountryModel)
  const Debate = DebateService(DebateModel, UserModel)
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

'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('longjohn') // Longjohn entrega mas información cuando ocurre un error.
}

// Servicio de Sequelize
const connectionDB = require('./lib/db')

// Modelos
const setupAimModel = require('./models/aim')
const setupAnswerModel = require('./models/answer')
const setupGeocommunityModel = require('./models/geocommunity')
const setupCommunityFundModel = require('./models/community_fund')
const setupCountryModel = require('./models/country')
const setupDebateModel = require('./models/debate')
const setupDenunciasModel = require('./models/denuncias')
const setupDonationsModel = require('./models/donations')
const setupGroupsModel = require('./models/groups')
const setupOpinionModel = require('./models/opinion')
const setupOrganizationModel = require('./models/organization')
const setupPollModel = require('./models/poll')
const setupQuestionAimModel = require('./models/question')
const setupRegionModel = require('./models/region')
const setupResourceHumanModel = require('./models/resources_humans')
const setupResourceMaterialModel = require('./models/resources_materials')
const setupStateModel = require('./models/state')
const setupStaticModel = require('./models/static')
const setupSubAnswerModel = require('./models/subanswer')
const setupSubQuestionModel = require('./models/subquestion')
const setupUserModel = require('./models/user')

// Servicios
const GeocommunityService = require('./lib/geocommunity')
const CountryService = require('./lib/country')
const UserService = require('./lib/user')
const DebateService = require('./lib/debate')

module.exports = async function (config) {
  // Instancia de sequelize
  const sequelize = connectionDB(config)

  // Instancias de los modelos
  const AimModel = setupAimModel(config)
  const AnswerModel = setupAnswerModel(config)
  const GeocommunityModel = setupGeocommunityModel(config)
  const CommunityFundModel = setupCommunityFundModel(config)
  const CountryModel = setupCountryModel(config)
  const DebateModel = setupDebateModel(config)
  const DenunciasModel = setupDenunciasModel(config)
  const DonationsModel = setupDonationsModel(config)
  const GroupsModel = setupGroupsModel(config)
  const OpinionModel = setupOpinionModel(config)
  const OrganizationModel = setupOrganizationModel(config)
  const PollModel = setupPollModel(config)
  const QuestionAimModel = setupQuestionAimModel(config)
  const RegionModel = setupRegionModel(config)
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
  GeocommunityModel.belongsToMany(UserModel, { through: 'R_user_geocommunity' })
  GeocommunityModel.hasMany(AimModel)
  GeocommunityModel.hasMany(DebateModel)
  GeocommunityModel.hasMany(PollModel)
  GeocommunityModel.hasOne(GroupsModel)
  GeocommunityModel.hasOne(OrganizationModel)
  GeocommunityModel.hasOne(RegionModel)
  CommunityFundModel.belongsTo(AimModel)
  CommunityFundModel.belongsTo(UserModel)
  CommunityFundModel.hasMany(DonationsModel)
  CountryModel.hasMany(StateModel)
  CountryModel.belongsTo(GeocommunityModel)
  DebateModel.belongsTo(UserModel)
  DebateModel.belongsToMany(AimModel, { through: 'R_debate_aim' })
  DebateModel.belongsToMany(PollModel, { through: 'R_debate_poll' })
  DonationsModel.belongsTo(UserModel)
  DonationsModel.belongsTo(CommunityFundModel)
  OpinionModel.belongsTo(UserModel)
  OpinionModel.belongsTo(GeocommunityModel)
  OpinionModel.belongsToMany(StaticModel, { through: 'R_static_opinion' })
  QuestionAimModel.belongsTo(UserModel)
  QuestionAimModel.belongsTo(AimModel)
  QuestionAimModel.hasMany(AnswerModel)
  ResourceHumanModel.belongsToMany(UserModel, { through: 'R_rh_user' })
  ResourceHumanModel.belongsTo(AimModel)
  ResourceMaterialModel.belongsTo(UserModel, { through: 'R_rm_user' })
  ResourceMaterialModel.belongsTo(AimModel)
  StateModel.belongsTo(CountryModel)
  StateModel.belongsTo(GeocommunityModel)
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
  PollModel.belongsTo(UserModel)
  PollModel.belongsToMany(DebateModel, { through: 'R_debate_poll' })
  PollModel.belongsTo(GeocommunityModel)
  UserModel.belongsToMany(GeocommunityModel, { through: 'R_user_geocommunity' })
  UserModel.hasMany(AimModel)
  UserModel.hasMany(DebateModel)
  UserModel.hasMany(PollModel)
  UserModel.hasMany(OpinionModel)
  UserModel.hasMany(QuestionAimModel)
  UserModel.hasMany(SubQuestionModel)
  UserModel.hasMany(AnswerModel)
  UserModel.belongsToMany(ResourceHumanModel, { through: 'R_rh_user' })
  UserModel.belongsToMany(ResourceMaterialModel, { through: 'R_rm_user' })
  UserModel.hasMany(DonationsModel)
  UserModel.hasMany(CommunityFundModel)
  UserModel.hasMany(DenunciasModel)

  // Con await si esta funcion falla no se sigue ejecutando lo demas
  // El que llame a la funcion con async tendrá que hacer el control de errores
  await sequelize.authenticate()

  console.log(`SETUP: ${config.setup}`)
  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Aim = {}
  const Answer = {}
  const CommunityFund = {}
  const Country = CountryService(CountryModel)
  const Debate = DebateService(DebateModel, UserModel)
  const Denuncias = {}
  const Donation = {}
  const Geocommunity = GeocommunityService(GeocommunityModel)
  const Opinion = {}
  const Organization = {}
  const Poll = {}
  const QuestionAim = {}
  const Region = {}
  const ResourceHuman = {}
  const ResourceMaterial = {}
  const SubQuestion = {}
  const State = {}
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
    Geocommunity,
    Opinion,
    Organization,
    QuestionAim,
    Region,
    ResourceHuman,
    ResourceMaterial,
    State,
    Static,
    SubQuestion,
    Poll,
    User
  }
}

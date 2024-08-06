const connection = require('../config/connection');
require('../models/TagsModel');
require('../models/UserTypesModel');
require('../models/UserModel');
require('../models/ProfileModel');
require('../models/CommentsModel');
require('../models/PostModel');
require('../models/PostTagsModel');

connection.sync({alter: true});
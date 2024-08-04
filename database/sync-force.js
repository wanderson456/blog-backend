const connection = require('../config/connection');
require('../models/TagsModel');
require('../models/UserTypesModel');
require('../models/UserModel');
require('../models/ProfileModel');
require('../models/PostModel');
require('../models/PostTagsModel');
require('../models/CommentsModel');
connection.sync({force: true});
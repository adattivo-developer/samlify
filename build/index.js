"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// version <= 1.25
var entity_idp_1 = __importStar(require("./src/entity-idp"));
exports.IdentityProvider = entity_idp_1.default;
exports.IdentityProviderInstance = entity_idp_1.IdentityProvider;
var entity_sp_1 = __importStar(require("./src/entity-sp"));
exports.ServiceProvider = entity_sp_1.default;
exports.ServiceProviderInstance = entity_sp_1.ServiceProvider;
var metadata_idp_1 = require("./src/metadata-idp");
exports.IdPMetadata = metadata_idp_1.default;
var metadata_sp_1 = require("./src/metadata-sp");
exports.SPMetadata = metadata_sp_1.default;
var utility_1 = require("./src/utility");
exports.Utility = utility_1.default;
var libsaml_1 = require("./src/libsaml");
exports.SamlLib = libsaml_1.default;
// roadmap
// new name convention in version >= 3.0
var Constants = __importStar(require("./src/urn"));
exports.Constants = Constants;
var Extractor = __importStar(require("./src/extractor"));
exports.Extractor = Extractor;
// exposed methods for customising samlify
var api_1 = require("./src/api");
exports.setSchemaValidator = api_1.setSchemaValidator;
//# sourceMappingURL=index.js.map
/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

/**
* The RestDeleteJobResult model module.
* @module model/RestDeleteJobResult
* @version 1.0
*/

var RestDeleteJobResult = (function () {
    /**
    * Constructs a new <code>RestDeleteJobResult</code>.
    * @alias module:model/RestDeleteJobResult
    * @class
    */

    function RestDeleteJobResult() {
        _classCallCheck(this, RestDeleteJobResult);

        this.Uuid = undefined;
        this.Label = undefined;
    }

    /**
    * Constructs a <code>RestDeleteJobResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestDeleteJobResult} obj Optional instance to populate.
    * @return {module:model/RestDeleteJobResult} The populated <code>RestDeleteJobResult</code> instance.
    */

    RestDeleteJobResult.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestDeleteJobResult();

            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = _ApiClient2['default'].convertToType(data['Uuid'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = _ApiClient2['default'].convertToType(data['Label'], 'String');
            }
        }
        return obj;
    };

    /**
    * @member {String} Uuid
    */
    return RestDeleteJobResult;
})();

exports['default'] = RestDeleteJobResult;
module.exports = exports['default'];

/**
* @member {String} Label
*/
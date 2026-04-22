"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.depth = exports.colorist = exports.artworkSurface = exports.birthPlace = exports.birthDate = exports.givenName = exports.familyName = exports.datePublished = exports.dateCreated = exports.artMedium = exports.artist = exports.artform = exports.artEdition = exports.Observation = exports.MediaObject = exports.ListItem = exports.ItemList = exports.DefinedTermSet = exports.Intangible = exports.DefinedTerm = exports.Comment = exports.Answer = exports.PlayAction = exports.UpdateAction = exports.SubscribeAction = exports.Conversation = exports.VideoObject = exports.Apartment = exports.Room = exports.Accommodation = exports.Organization = exports.BefriendAction = exports.JoinAction = exports.Event = exports.Country = exports.Place = exports.City = exports.House = exports.Code = exports.ImageObject = exports.Action = exports.PropertyValue = exports.Project = exports.VisualArtwork = exports.Person = exports.CreativeWork = exports.DataType = exports._ontologyResource = exports.ns = exports.loadData = void 0;
exports.members = exports.endTime = exports.honorificPrefix = exports.member = exports.address = exports.superEvent = exports.legalName = exports.email = exports.faxNumber = exports.object = exports.participant = exports.agent = exports.event = exports.location = exports.attendee = exports.affiliation = exports.endDate = exports.startDate = exports.telephone = exports.about = exports.accommodationCategory = exports.actionStatus = exports.longitude = exports.latitude = exports.contentUrl = exports.Thing = exports.AdministrativeArea = exports.containsPlace = exports.containedInPlace = exports.codeValue = exports.url = exports.subjectOf = exports.sameAs = exports.potentialAction = exports.name = exports.mainEntityOfPage = exports.image = exports.identifier = exports.disambiguatingDescription = exports.description = exports.homeLocation = exports.hasOccupation = exports.gender = exports.alternateName = exports.additionalType = exports.width = exports.penciler = exports.letterer = exports.inker = exports.height = void 0;
exports.schema = exports.childItem = exports.headline = exports.creator = exports.streetAddress = exports.addressLocality = exports.addressRegion = exports.addressCountry = exports.dateModified = exports.dateDeleted = exports.observationAbout = exports.observationDate = exports.variableMeasured = exports.propertyID = exports.value = exports.creditText = exports.copyrightNotice = exports.usageInfo = exports.nextItem = exports.previousItem = exports.item = exports.position = exports.itemListElement = exports.jobTitle = exports.hasDefinedTerm = exports.inDefinedTermSet = exports.skills = exports.isMarried = exports.text = exports.parentItem = exports.knows = exports.teamID = exports.startTime = exports.areaServed = exports.postalCode = exports.founder = void 0;
var Prefix_1 = require("@_linked/core/utils/Prefix");
var NameSpace_1 = require("@_linked/core/utils/NameSpace");
var package_js_1 = require("../package.js");
var _this = __importStar(require("./schema.js"));
var loadData = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
            return [2 /*return*/, Promise.all([
                    Promise.resolve().then(function () { return __importStar(require('../data/schema-added.json')); }),
                    Promise.resolve().then(function () { return __importStar(require('../data/schema.json')); }),
                ]).then(function (_a) {
                    var _b = __read(_a, 2), added = _b[0], schema = _b[1];
                    return [added, schema];
                })];
        }
        return [2 /*return*/, Promise.all([
                //@ts-ignore
                Promise.resolve().then(function () { return __importStar(require('../data/schema-added.json')); }).then(function (data) { return data.default; }),
                //@ts-ignore
                Promise.resolve().then(function () { return __importStar(require('../data/schema.json')); }).then(function (data) { return data.default; }),
            ])];
    });
}); };
exports.loadData = loadData;
//NOTE: we have changed the usual namespace https://schema.org/ to http://schema.org/ because tools like jsonld will convert all URI's to HTTP
//for now, our approach is therefor to convert to & use http versions only. schema.json has been adjusted too, and all namespaces in other files should use http://schema.org
exports.ns = (0, NameSpace_1.createNameSpace)('http://schema.org/');
Prefix_1.Prefix.add('schema', 'http://schema.org/');
var term = function (suffix) { return (0, exports.ns)(suffix); };
exports._ontologyResource = term('');
// Classes
exports.DataType = term('DataType');
exports.CreativeWork = term('CreativeWork');
exports.Person = term('Person');
exports.VisualArtwork = term('VisualArtwork');
exports.Project = term('Project');
exports.PropertyValue = term('PropertyValue');
exports.Action = term('Action');
exports.ImageObject = term('ImageObject');
exports.Code = term('Code');
exports.House = term('House');
exports.City = term('City');
exports.Place = term('Place');
exports.Country = term('Country');
exports.Event = term('Event');
exports.JoinAction = term('JoinAction');
exports.BefriendAction = term('BefriendAction');
exports.Organization = term('Organization');
exports.Accommodation = term('Accommodation');
exports.Room = term('Room');
exports.Apartment = term('Apartment');
exports.VideoObject = term('VideoObject');
exports.Conversation = term('Conversation');
exports.SubscribeAction = term('SubscribeAction');
exports.UpdateAction = term('UpdateAction');
exports.PlayAction = term('PlayAction');
exports.Answer = term('Answer');
exports.Comment = term('Comment');
exports.DefinedTerm = term('DefinedTerm');
exports.Intangible = term('Intangible');
exports.DefinedTermSet = term('DefinedTermSet');
exports.ItemList = term('ItemList');
exports.ListItem = term('ListItem');
exports.MediaObject = term('MediaObject');
exports.Observation = term('Observation');
// Properties
exports.artEdition = term('artEdition');
exports.artform = term('artform');
exports.artist = term('artist');
exports.artMedium = term('artMedium');
exports.dateCreated = term('dateCreated');
exports.datePublished = term('datePublished');
exports.familyName = term('familyName');
exports.givenName = term('givenName');
exports.birthDate = term('birthDate');
exports.birthPlace = term('birthPlace');
exports.artworkSurface = term('artworkSurface');
exports.colorist = term('colorist');
exports.depth = term('depth');
exports.height = term('height');
exports.inker = term('inker');
exports.letterer = term('letterer');
exports.penciler = term('penciler');
exports.width = term('width');
exports.additionalType = term('additionalType');
exports.alternateName = term('alternateName');
exports.gender = term('gender');
exports.hasOccupation = term('hasOccupation');
exports.homeLocation = term('homeLocation');
exports.description = term('description');
exports.disambiguatingDescription = term('disambiguatingDescription');
exports.identifier = term('identifier');
exports.image = term('image');
exports.mainEntityOfPage = term('mainEntityOfPage');
exports.name = term('name');
exports.potentialAction = term('potentialAction');
exports.sameAs = term('sameAs');
exports.subjectOf = term('subjectOf');
exports.url = term('url');
exports.codeValue = term('codeValue');
exports.containedInPlace = term('containedInPlace');
exports.containsPlace = term('containsPlace');
exports.AdministrativeArea = term('AdministrativeArea');
exports.Thing = term('Thing');
exports.contentUrl = term('contentUrl');
exports.latitude = term('latitude');
exports.longitude = term('longitude');
exports.actionStatus = term('actionStatus');
exports.accommodationCategory = term('accommodationCategory');
exports.about = term('about');
exports.telephone = term('telephone');
exports.startDate = term('startDate');
exports.endDate = term('endDate');
exports.affiliation = term('affiliation');
exports.attendee = term('attendee');
exports.location = term('location');
exports.event = term('event');
exports.agent = term('agent');
exports.participant = term('participant');
exports.object = term('object');
exports.faxNumber = term('faxNumber');
exports.email = term('email');
exports.legalName = term('legalName');
exports.superEvent = term('superEvent');
exports.address = term('address');
exports.member = term('member');
exports.honorificPrefix = term('honorificPrefix');
exports.endTime = term('endTime');
exports.members = term('members');
exports.founder = term('founder');
exports.postalCode = term('postalCode');
exports.areaServed = term('areaServed');
exports.startTime = term('startTime');
exports.teamID = term('teamID');
exports.knows = term('knows');
exports.parentItem = term('parentItem');
exports.text = term('text');
exports.isMarried = term('isMarried');
exports.skills = term('skills');
exports.inDefinedTermSet = term('inDefinedTermSet');
exports.hasDefinedTerm = term('hasDefinedTerm');
exports.jobTitle = term('jobTitle');
exports.itemListElement = term('itemListElement');
exports.position = term('position');
exports.item = term('item');
exports.previousItem = term('previousItem');
exports.nextItem = term('nextItem');
exports.usageInfo = term('usageInfo');
exports.copyrightNotice = term('copyrightNotice');
exports.creditText = term('creditText');
exports.value = term('value');
exports.propertyID = term('propertyID');
exports.variableMeasured = term('variableMeasured');
exports.observationDate = term('observationDate');
exports.observationAbout = term('observationAbout');
exports.dateDeleted = term('dateDeleted');
exports.dateModified = term('dateModified');
exports.addressCountry = term('addressCountry');
exports.addressRegion = term('addressRegion');
exports.addressLocality = term('addressLocality');
exports.streetAddress = term('streetAddress');
exports.creator = term('creator');
exports.headline = term('headline');
exports.childItem = term('childItem');
exports.schema = {
    // Classes
    Intangible: exports.Intangible,
    DataType: exports.DataType,
    creditText: exports.creditText,
    copyrightNotice: exports.copyrightNotice,
    CreativeWork: exports.CreativeWork,
    usageInfo: exports.usageInfo,
    Person: exports.Person,
    VisualArtwork: exports.VisualArtwork,
    Project: exports.Project,
    PropertyValue: exports.PropertyValue,
    Action: exports.Action,
    ImageObject: exports.ImageObject,
    Code: exports.Code,
    Event: exports.Event,
    JoinAction: exports.JoinAction,
    BefriendAction: exports.BefriendAction,
    Organization: exports.Organization,
    Accommodation: exports.Accommodation,
    Room: exports.Room,
    Apartment: exports.Apartment,
    VideoObject: exports.VideoObject,
    Conversation: exports.Conversation,
    SubscribeAction: exports.SubscribeAction,
    UpdateAction: exports.UpdateAction,
    PlayAction: exports.PlayAction,
    Answer: exports.Answer,
    Comment: exports.Comment,
    DefinedTerm: exports.DefinedTerm,
    DefinedTermSet: exports.DefinedTermSet,
    ItemList: exports.ItemList,
    ListItem: exports.ListItem,
    Observation: exports.Observation,
    House: exports.House,
    Place: exports.Place,
    City: exports.City,
    Country: exports.Country,
    AdministrativeArea: exports.AdministrativeArea,
    Thing: exports.Thing,
    MediaObject: exports.MediaObject,
    // Properties
    dateModified: exports.dateModified,
    dateDeleted: exports.dateDeleted,
    additionalType: exports.additionalType,
    alternateName: exports.alternateName,
    gender: exports.gender,
    description: exports.description,
    teamID: exports.teamID,
    disambiguatingDescription: exports.disambiguatingDescription,
    identifier: exports.identifier,
    image: exports.image,
    mainEntityOfPage: exports.mainEntityOfPage,
    name: exports.name,
    headline: exports.headline,
    potentialAction: exports.potentialAction,
    sameAs: exports.sameAs,
    subjectOf: exports.subjectOf,
    url: exports.url,
    artform: exports.artform,
    artist: exports.artist,
    artworkSurface: exports.artworkSurface,
    creator: exports.creator,
    colorist: exports.colorist,
    depth: exports.depth,
    height: exports.height,
    inker: exports.inker,
    containedInPlace: exports.containedInPlace,
    containsPlace: exports.containsPlace,
    letterer: exports.letterer,
    penciler: exports.penciler,
    observationDate: exports.observationDate,
    variableMeasured: exports.variableMeasured,
    observationAbout: exports.observationAbout,
    width: exports.width,
    artEdition: exports.artEdition,
    artMedium: exports.artMedium,
    dateCreated: exports.dateCreated,
    datePublished: exports.datePublished,
    birthDate: exports.birthDate,
    birthPlace: exports.birthPlace,
    hasOccupation: exports.hasOccupation,
    homeLocation: exports.homeLocation,
    familyName: exports.familyName,
    givenName: exports.givenName,
    propertyID: exports.propertyID,
    codeValue: exports.codeValue,
    contentUrl: exports.contentUrl,
    latitude: exports.latitude,
    longitude: exports.longitude,
    telephone: exports.telephone,
    honorificPrefix: exports.honorificPrefix,
    actionStatus: exports.actionStatus,
    accommodationCategory: exports.accommodationCategory,
    about: exports.about,
    knows: exports.knows,
    startDate: exports.startDate,
    endDate: exports.endDate,
    affiliation: exports.affiliation,
    attendee: exports.attendee,
    location: exports.location,
    event: exports.event,
    agent: exports.agent,
    participant: exports.participant,
    object: exports.object,
    faxNumber: exports.faxNumber,
    email: exports.email,
    address: exports.address,
    legalName: exports.legalName,
    superEvent: exports.superEvent,
    member: exports.member,
    endTime: exports.endTime,
    members: exports.members,
    founder: exports.founder,
    postalCode: exports.postalCode,
    areaServed: exports.areaServed,
    startTime: exports.startTime,
    parentItem: exports.parentItem,
    text: exports.text,
    isMarried: exports.isMarried,
    skills: exports.skills,
    inDefinedTermSet: exports.inDefinedTermSet,
    hasDefinedTerm: exports.hasDefinedTerm,
    jobTitle: exports.jobTitle,
    itemListElement: exports.itemListElement,
    position: exports.position,
    item: exports.item,
    previousItem: exports.previousItem,
    nextItem: exports.nextItem,
    value: exports.value,
    addressCountry: exports.addressCountry,
    addressRegion: exports.addressRegion,
    addressLocality: exports.addressLocality,
    streetAddress: exports.streetAddress,
    childItem: exports.childItem,
};
(0, package_js_1.linkedOntology)(_this, exports.ns, 'schema', exports.loadData, [
    '../data/schema.json',
    '../data/schema-added.json',
]);
//# sourceMappingURL=schema.js.map
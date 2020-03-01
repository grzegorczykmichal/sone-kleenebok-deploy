"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Listing_1 = require("./Listing");
const lodash_merge_1 = __importDefault(require("lodash.merge"));
exports.resolvers = lodash_merge_1.default(Listing_1.listingResolvers);

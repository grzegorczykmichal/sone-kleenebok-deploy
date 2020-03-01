"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const faker_1 = __importDefault(require("faker"));
const db_1 = require("../src/db");
const mongodb_1 = require("mongodb");
console.log("[seed]: Running...");
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield db_1.connectDatabase();
        const listings = [
            {
                _id: new mongodb_1.ObjectId(),
                title: "Clean and fully furnished apartment. 5 min away from CN Tower",
                image: "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg",
                address: "3210 Scotchmere Dr W, Toronto, ON, CA",
                price: 10000,
                numOfGuests: 2,
                numOfBeds: 1,
                numOfBaths: 2,
                rating: 5
            },
            {
                _id: new mongodb_1.ObjectId(),
                title: "Luxurious home with private pool",
                image: "https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-1_aikhx7.jpg",
                address: "100 Hollywood Hills Dr, Los Angeles, California",
                price: 15000,
                numOfGuests: 2,
                numOfBeds: 1,
                numOfBaths: 1,
                rating: 4
            },
            {
                _id: new mongodb_1.ObjectId(),
                title: "Single bedroom located in the heart of downtown San Fransisco",
                image: "https://res.cloudinary.com/tiny-house/image/upload/v1560646219/mock/San%20Fransisco/san-fransisco-listing-1_qzntl4.jpg",
                address: "200 Sunnyside Rd, San Fransisco, California",
                price: 25000,
                numOfGuests: 3,
                numOfBeds: 2,
                numOfBaths: 2,
                rating: 3
            }
        ];
        db.listings.insertMany(listings);
        console.log("[seed]: Finished");
    }
    catch (error) {
        throw new Error("Failed to seed");
    }
});
const send = (listings) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield db_1.connectDatabase();
    try {
        db.listings.insertMany(listings);
    }
    catch (error) {
        throw new Error("Failed to seed");
    }
});
const fake = () => {
    return {
        _id: new mongodb_1.ObjectId(),
        title: faker_1.default.lorem.words(faker_1.default.random.number({ min: 2, max: 6 })),
        image: faker_1.default.image.imageUrl(),
        address: `${faker_1.default.address.streetAddress()} ${faker_1.default.address.streetName()}, ${faker_1.default.address.zipCode()} ${faker_1.default.address.city()}`,
        price: Number.parseInt(faker_1.default.finance.amount()),
        numOfGuests: faker_1.default.random.number({ min: 1, max: 5 }),
        numOfBeds: faker_1.default.random.number({ min: 1, max: 3 }),
        numOfBaths: faker_1.default.random.number({ min: 1, max: 3 }),
        rating: faker_1.default.random.number({ min: 1, max: 10 })
    };
};
const args = process.argv.slice(2);
if (args.length === 1) {
    const fakes = [];
    console.log(`Faking ${args[0]} items.`);
    for (let i = 0; i < Number.parseInt(args[0]); i++) {
        fakes.push(fake());
    }
    send(fakes);
    console.log("[seed]: Finished");
}
else {
    seed();
}

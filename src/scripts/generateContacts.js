import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import * as fs from "node:fs/promises";

const generateContacts = async (number) => {
  const contacts = Array(number).fill(0).map(createFakeContact);
  console.log(contacts);
  const buffer = await fs.readFile(PATH_DB, "utf-8");
  const data = JSON.parse(buffer);
  return data;
};

generateContacts(5);

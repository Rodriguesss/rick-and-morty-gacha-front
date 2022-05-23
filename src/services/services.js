import axios from 'axios'

const API_URL = 'http://localhost:5003';

function createHeader(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

async function signOut(body) {
  const promise = await axios.post(`${API_URL}/api/users`, body)

  return promise;
}

async function signIn(body) {
  const promise = await axios.post(`${API_URL}/api/auth`, body)

  return promise;
}

async function findProfile(token) {
  const headers = createHeader(token);
  const promise = await axios.get(`${API_URL}/api/profiles`, headers);

  return promise;
}

async function findProfileIcon(iconId, token) {
  const headers = createHeader(token);
  const promise = await axios.get(`${API_URL}/api/profile-icons/${iconId}`, headers);

  return promise;
}

async function createProfile(token) {
  const headers = createHeader(token);
  const promise = await axios.post(`${API_URL}/api/profiles`, {}, headers);

  return promise;
}

async function findAllProfileIcons(token) {
  const headers = createHeader(token);
  const promise = await axios.get(`${API_URL}/api/profile-icons`, headers);

  return promise;
}

async function linkProfileIcon(body, token) {
  const headers = createHeader(token);
  const promise = await axios.post(`${API_URL}/api/profiles/link-icon`, body, headers);

  return promise;
}

async function findAllBanners(token) {
  const headers = createHeader(token);
  const promise = await axios.get(`${API_URL}/api/banners`, headers);

  return promise;
}

async function summonCharacter(body, token) {
  const headers = createHeader(token);
  const promise = await axios.post(`${API_URL}/api/characters`, body, headers);

  return promise;
}

async function findAllCharacters(token) {
  const headers = createHeader(token);
  const promise = await axios.get(`${API_URL}/api/characters`, headers);

  return promise;
}

const services = {
  signOut,
  signIn,
  findProfile,
  findProfileIcon,
  createProfile,
  findAllProfileIcons,
  linkProfileIcon,
  findAllBanners,
  summonCharacter,
  findAllCharacters
}

export default services;
const axios = require("axios");
import Users from "./Users/users";

jest.mock("axios");

test("deve buscar usuarios", () => {
  const users = [{ name: "Maria" }];
  const resp = { data: users };

  axios.get.mockResolvedValue(resp);

  return Users.all().then((data) => {
    expect(data).toEqual(users);
  });
});

<p align="center">
  <h1 align="center">🍺</h1>
</p>
<h1 align="center">
  BrewFather Inventory
</h1>

## 🚀 How to get your own BrewFather public inventory list

1.  **Fork this repo**

2.  **Setup GitHub Pages**

    - Navigate to Settings > Pages
    - Select the `gh-pages` branch and select `/ root`


3.  **Setup GitHub secrets**
    - Navigate to Settings > Secrets
    - Add an `ACCESS_TOKEN` secret (create it [here](https://github.com/settings/tokens), `repo` permissions required)
    - Add a `BREWFATHER_API_KEY` secret (this key can be found in the BrewFather app)
    - Add a `BREWFATHER_USER_ID` secret (this key can be found in the BrewFather app)

4.  **Winning**
    - Your Github Actions will contain a workflow that will publish your inventory every six hours.

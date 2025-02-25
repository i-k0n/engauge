import axios from "axios";

export default {
    // get all well info
    getAllWells: function () {
        return axios.get("/api/wells");
    },
    // get specific well info
    getWell: function (id) {
        return axios.get("/api/well" + id);
    },
    // insert well info
    addWell: function (wellData) {
        return axios.post("/api/addWell", wellData);
    },
    // recompletion form (w-2)
    postWellRecomp: function (id, wellData) {
        return axios.post("/api/welltable/" + id.id + "/recomp/new", wellData);
    },
    // recompletion form (w-2)
    getWellRecomp: function (id, wellData) {
        return axios.get("/api/welltable/" + id.id + "/recomp", wellData)
    },
    postWellProd: function (id, wellData) {
        console.log(id.id)
        return axios.post("/api/welltable/" + id.id + "/prod/new", wellData)
    },
    getWellProd: function (id, wellData) {
        console.log(id.id)
        return axios.get("/api/welltable/" + id.id + "/prod", wellData)
    },
    getAllProd: function (wellData) {
        return axios.get("/api/prodAll", wellData)
    },
    // get well data
    getWellId: function (wellId) {
        return axios.get("/api/well/" + wellId)
    // add data to the well
  },
  addToWell: function (id) {
    return axios.post("/api/well/" + id)
  },
  updateWellStatus: function(id, val){
    return axios.put("/api/well/" + id, { isOn: val })
  }
};


// QUANDL API
// Parameters (docs: https://docs.quandl.com/docs/parameters-2)
// [limit=] (limit results)
// [start_date=yyyy-mm-dd]
// [send_date=yyyy-mm-dd]
// [collapse=daily, weekly, monthly, quarterly, annual]
// Crude Oil [limit=1 (limit to one result)] [collaps=daily (collapse data to daily average)]
// http://www.quandl.com/api/v3/datasets/CHRIS/CME_CL1.json?api_key=ekLznknawZDukejxmwxf&collapse=daily&limit=1
//
// Natural Gas
// http://www.quandl.com/api/v3/datasets/CHRIS/CME_NG1.json?api_key=ekLznknawZDukejxmwxf&collapse=daily&limit=1
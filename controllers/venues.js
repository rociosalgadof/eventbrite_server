import axios from "axios";
import express from "express";

export const getVenues = (req, res) => {
  const { id } = req.params;
  const options = {
    method: "GET",
    url: `https://www.eventbriteapi.com/v3/venues/${id}/`,
    headers: {
      Authorization: `Bearer ${process.env.AUTHORIZATION}`,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
      console.log("Venue data fetched!");
    })
    .catch((error) => {
      console.log(error);
    });
};

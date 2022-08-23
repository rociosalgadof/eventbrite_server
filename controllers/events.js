import axios from "axios";
import express from "express";

export const getEvent = (req, res) => {
  const { id } = req.params;
  const options = {
    method: "GET",
    url: `https://www.eventbriteapi.com/v3/events/${id}/`,
    headers: {
      Authorization: `Bearer ${process.env.AUTHORIZATION}`,
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log("Event data fetched!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getEvents = (req, res) => {
  const options = {
    method: "GET",
    url: `https://www.eventbriteapi.com/v3/organizations/${process.env.ORGANIZATION_ID}/events/`,
    headers: {
      Authorization: `Bearer ${process.env.AUTHORIZATION}`,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data.events);
      console.log("Data fetched!!!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createEvent = (req, res) => {
  const data = req.body;
  const options = {
    method: "POST",
    url: `https://www.eventbriteapi.com/v3/organizations/${process.env.ORGANIZATION_ID}/events/`,
    headers: {
      Authorization: `Bearer ${process.env.AUTHORIZATION}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(options)
    .then((response) => {
      console.log("New Event created!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteEvent = (req, res) => {
  const { id } = req.params;
  const options = {
    method: "DELETE",
    url: `https://www.eventbriteapi.com/v3/events/${id}/`,
    headers: {
      Authorization: `Bearer ${process.env.AUTHORIZATION}`,
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log("Event deleted!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateEvent = (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const options = {
    method: "POST",
    url: `https://www.eventbriteapi.com/v3/events/${id}/`,
    headers: {
      Authorization: `Bearer ${process.env.AUTHORIZATION}`,
      "Content-Type": "application/json",
    },
    data: body,
  };

  axios
    .request(options)
    .then((response) => {
      console.log("Event updated!");
    })
    .catch((error) => {
      console.log(error);
    });
};

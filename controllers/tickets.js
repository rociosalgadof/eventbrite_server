// import axios from "axios";
// import express from "express";
// import response from "express";

// export const getTicketClass = (req, res) => {
//   const { id } = req.params;
//   const options = {
//     method: "GET",
//     url: `https://www.eventbriteapi.com/v3/events/${id}/ticket_classes/`,
//     headers: {
//       Authorization: `Bearer ${process.env.AUTHORIZATION}`,
//     },
//   };
//   axios
//     .request(options)
//     .then((response) => {
//       res.json(response.data.ticket_classes);
//       console.log("Ticket data fetched!");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

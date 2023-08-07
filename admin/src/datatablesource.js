export const userColumns = [
  { field: "_id", headerName: "ID", width: 210 },
  {
    field: "username",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 70,
  },
  {
    field: "city",
    headerName: "City",
    width: 70,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 70,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 150,
  },
  {
    field: "number",
    headerName: "Number",
    width: 100,
  },
   {
    field: "address",
    headerName: "Address",
    width: 100,
  },

  {
    field: "github",
    headerName: "Github",
    width: 100,
  },
];

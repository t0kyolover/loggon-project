const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      loggedIn: false,
      user: {
        id: 1,
        email: "pereayats@email.com",
        password: "1234",
        image_url:
          "https://scontent.xx.fbcdn.net/v/t1.15752-9/429857093_437082848988064_3333411511087179117_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=oB8UaK6zJUcAX8DG7Pj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRI6WYkb2BOpkY2dEyd2AVYZqf9FUYaKcFlToeIgOBLiQ&oe=66087116",
        username: "pere",
        steam_username: "pereayts",
        twitch_username: "pereayats",
        interests: [
          "Single Player",
          "Horror",
          "Survival",
          "Third Person",
          "Action-Adventure",
          "3D",
        ],
        posts: [
          {
            id: 1,
            user_id: 1,
            date_of_creation: "",
            game_title: "GTA V",
            item_type: "DLC",
            platform: "Xbox",
            format: "Digital",
            rating: 8,
            original_price: 79.99,
            offer_price: 35.99,
            expiration_date: "12/03/2024",
            promo_code: "",
            offer_link:
              "https://store.steampowered.com/app/397540/Borderlands_3/",
            scheduled_date: "",
            sheduled_time: "",
          },
          {
            id: 2,
            user_id: 1,
            date_of_creation: "",
            game_title: "Atomic Heart",
            item_type: "Game",
            platform: "PC",
            format: "CD",
            rating: 10,
            original_price: 79.99,
            offer_price: 60.99,
            expiration_date: "12/03/2024",
            promo_code: "",
            offer_link:
              "https://store.steampowered.com/app/397540/Borderlands_3/",
            scheduled_date: "",
            sheduled_time: "",
          },
          {
            id: 3,
            user_id: 1,
            date_of_creation: "",
            game_title: "Overwatch",
            item_type: "In-Game Purchase",
            platform: "PS4",
            format: "Digital",
            rating: 10,
            original_price: 15,
            offer_price: 9.99,
            expiration_date: "12/03/2024",
            promo_code: "",
            offer_link:
              "https://store.steampowered.com/app/397540/Borderlands_3/",
            scheduled_date: "",
            sheduled_time: "",
          },
          {
            id: 4,
            user_id: 1,
            date_of_creation: "",
            game_title: "Pokemon",
            item_type: "Game",
            platform: "Nintendo",
            format: "CD",
            rating: 10,
            original_price: 65,
            offer_price: 49,
            expiration_date: "12/03/2024",
            promo_code: "",
            offer_link:
              "https://store.steampowered.com/app/397540/Borderlands_3/",
            scheduled_date: "",
            sheduled_time: "",
          },
        ],
        saved: ["Saved1", "Saved2", "Saved3", "Saved4"],
        alerts: ["Alert1", "Alert2", "Alert3", "Alert4"],
        newsletter: false,
      },
    },
    actions: {
      // LOGIN 
      login: () => {
        setStore({ loggedIn: true });
      },
	  // LOGOUT
      logout: () => {
        setStore({ loggedIn: false });
      },
    },
  };
};

export default getState;

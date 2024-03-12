const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      loggedIn: true,
      user: {
        id: 1,
        email: "pereayats@email.com",
        password: "1234",
        image_url:
          "https://pbs.twimg.com/profile_images/1615039426530316288/jhcrsFcg_400x400.jpg",
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
            image_url: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
            item_type: "DLC",
            platform: "Xbox",
            format: "Digital",
            rating: 8,
            original_price: 79.99,
            offer_price: 35.99,
            expiration_date: "2024-03-27",
            promo_code: "HDGUDS",
            offer_link:
              "https://store.steampowered.com/app/397540/Borderlands_3/",
            scheduled: false,
            scheduled_date: "",
            sheduled_time: "",
            game_tags: ["multiplayer", "action", "adventure", "open-world"],
          },
          {
            id: 2,
            user_id: 1,
            date_of_creation: "",
            game_title: "Atomic Heart",
            image_url:
              "https://image.api.playstation.com/vulcan/ap/rnd/202209/2815/ghdxLSLpUl24o2Q1eq3yTaji.jpg",
            item_type: "Game",
            platform: "PC",
            format: "CD",
            rating: 10,
            original_price: 79.99,
            offer_price: 60.99,
            expiration_date: "2024-03-28",
            promo_code: "DJIODP",
            offer_link:
              "https://store.steampowered.com/app/397540/Borderlands_3/",
            scheduled_date: "",
            sheduled_time: "",
            game_tags: ["singleplayer", "action", "adventure"],
          },
          {
            id: 3,
            user_id: 1,
            date_of_creation: "",
            game_title: "Overwatch 2",
            image_url:
              "https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/10/OW2-be9287b234afbe7898ac.jpg",
            item_type: "In-Game Purchase",
            platform: "PS4",
            format: "Digital",
            rating: 10,
            original_price: 15,
            offer_price: 9.99,
            expiration_date: "2024-03-26",
            promo_code: "DFJISOP",
            offer_link:
              "https://store.steampowered.com/app/397540/Borderlands_3/",
            scheduled_date: "",
            sheduled_time: "",
            game_tags: ["multiplayer", "action", "shooter"],
          },
          {
            id: 4,
            user_id: 1,
            date_of_creation: "",
            game_title: "Pokemon Violet",
            image_url:
              "https://assets-prd.ignimgs.com/2022/08/03/pokemon-violet-1659542326365.jpg",
            item_type: "Game",
            platform: "Nintendo",
            format: "CD",
            rating: 10,
            original_price: 65,
            offer_price: 49,
            expiration_date: "2024-03-29",
            promo_code: "DFJSIF",
            offer_link:
              "https://store.steampowered.com/app/397540/Borderlands_3/",
            scheduled_date: "",
            sheduled_time: "",
            game_tags: ["singleplayer", "adventure", "open-world"],
          },
        ],
        saved: [],
        alerts: [
          {
            id: 5,
            user_id: 2,
            date_of_creation: "",
            game_title: "GTA V",
            image_url: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
            item_type: "DLC",
            platform: "Xbox",
            format: "Digital",
            rating: 8,
            original_price: 79.99,
            offer_price: 35.99,
            expiration_date: "2024-03-27",
            promo_code: "HDGUDS",
            offer_link:
              "https://store.steampowered.com/app/397540/Borderlands_3/",
            scheduled: false,
            scheduled_date: "",
            sheduled_time: "",
            game_tags: ["multiplayer", "action", "adventure", "open-world"],
          },
        ],
        newsletter: false,
      },
      deals: [
        {
          id: 1,
          user_id: 1,
          date_of_creation: "",
          game_title: "GTA V",
          image_url: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
          item_type: "DLC",
          platform: "Xbox",
          format: "Digital",
          rating: 8,
          original_price: 79.99,
          offer_price: 35.99,
          expiration_date: "2024-03-27",
          promo_code: "HDGUDS",
          offer_link:
            "https://store.steampowered.com/app/397540/Borderlands_3/",
          scheduled: false,
          scheduled_date: "",
          sheduled_time: "",
          game_tags: ["multiplayer", "action", "adventure", "open-world"],
        },
        {
          id: 2,
          user_id: 1,
          date_of_creation: "",
          game_title: "Atomic Heart",
          image_url:
            "https://image.api.playstation.com/vulcan/ap/rnd/202209/2815/ghdxLSLpUl24o2Q1eq3yTaji.jpg",
          item_type: "Game",
          platform: "PC",
          format: "CD",
          rating: 10,
          original_price: 79.99,
          offer_price: 60.99,
          expiration_date: "2024-03-28",
          promo_code: "DJIODP",
          offer_link:
            "https://store.steampowered.com/app/397540/Borderlands_3/",
          scheduled_date: "",
          sheduled_time: "",
          game_tags: ["singleplayer", "action", "adventure"],
        },
        {
          id: 3,
          user_id: 1,
          date_of_creation: "",
          game_title: "Overwatch 2",
          image_url:
            "https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/10/OW2-be9287b234afbe7898ac.jpg",
          item_type: "In-Game Purchase",
          platform: "PS4",
          format: "Digital",
          rating: 10,
          original_price: 15,
          offer_price: 9.99,
          expiration_date: "2024-03-26",
          promo_code: "DFJISOP",
          offer_link:
            "https://store.steampowered.com/app/397540/Borderlands_3/",
          scheduled_date: "",
          sheduled_time: "",
          game_tags: ["multiplayer", "action", "shooter"],
        },
        {
          id: 4,
          user_id: 1,
          date_of_creation: "",
          game_title: "Pokemon Violet",
          image_url:
            "https://assets-prd.ignimgs.com/2022/08/03/pokemon-violet-1659542326365.jpg",
          item_type: "Game",
          platform: "Nintendo",
          format: "CD",
          rating: 10,
          original_price: 65,
          offer_price: 49,
          expiration_date: "2024-03-29",
          promo_code: "DFJSIF",
          offer_link:
            "https://store.steampowered.com/app/397540/Borderlands_3/",
          scheduled_date: "",
          sheduled_time: "",
          game_tags: ["singleplayer", "adventure", "open-world"],
        },
      ],
      games: [
        { game_tags: ["multiplayer", "action", "adventure", "open-world"] },
      ],
      searchResults: [],
    },
    actions: {
      //--------------------------LOGIN/LOGOUT/SIGNUP ACTIONS----------------------//
      signup: (email, password) => {
        console.log("User registered successfully!");
      },

      login: (email, password) => {
        const store = getStore();
        if (store.user.email === email && store.user.password === password) {
          setStore({ loggedIn: true });
          console.log("Logged in successfully!");
        } else {
          alert("Email or password incorrect!");
        }
      },

      forgotPassword: (email) => {
        console.log("Password recovery email sent successfully!");
      },

      logout: () => {
        setStore({ loggedIn: false });
        console.log("Logged out successfully!");
      },
      //------------------------USER DETAILS ACTIONS--------------------//
      updateItem: (newItem, itemType) => {
        setStore((prevStore) => ({
          user: { ...prevStore.user, [itemType]: newItem },
        }));
        console.log(`${itemType} updated successfully!`);
      },

      updatePassword: (newPassword) => {
        setStore((prevStore) => ({
          user: { ...prevStore.user, password: newPassword },
        }));
        console.log("Password updated successfully!");
      },

      //--------------------------INTERSTS ACTIONS----------------------//
      addInterest: (newInterest) => {
        const store = getStore();
        setStore({
          user: { interests: [...store.user.interests, newInterest] },
        });
        console.log("New interest added successfully!");
      },

      deleteInterest: (index) => {
        setStore((prevStore) => ({
          user: {
            ...prevStore.user,
            interests: prevStore.user.interests.filter((_, i) => i !== index),
          },
        }));
        console.log("Interest deleted successfully!");
      },

      //--------------------------POSTS ACTIONS----------------------//

      postDeal: (deal) => {
        setStore((prevStore) => ({
          user: { ...prevStore.user, posts: [...prevStore.user.posts, deal] },
        }));
        console.log("Deal posted successfully!");
      },

      modifyPost: (
        imageUrl,
        offerPrice,
        expirationDate,
        promoCode,
        scheduledDate,
        scheduledTime,
        scheduled
      ) => {
        setStore((prevStore) => ({
          user: {
            ...prevStore.user,
            posts: prevStore.user.posts.map((post, i) => {
              if (i === 0) {
                return {
                  ...post,
                  image_url: imageUrl,
                  offer_price: offerPrice,
                  expiration_date: expirationDate,
                  promo_code: promoCode,
                  scheduled_date: scheduledDate,
                  scheduled_time: scheduledTime,
                  scheduled: scheduled,
                };
              }
              return post;
            }),
          },
        }));
        console.log("Deal has been modified successfully!");
      },

      //--------------------------SEARCHES----------------------//
      searchInNavbar: (searchTerm) => {
        const store = getStore();
        const allItems = [].concat(store.deals, store.games);
        const results = allItems.filter((item) =>
          item.game_tags.filter((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        if (results.length === 0) {
          alert("No results found!");
        } else {
          setStore({ searchResults: results });
          console.log("Search results updated successfully!");
          console.log(results);
        }
      },
      //--------------------------GET ITEMS----------------------//
      openItem: (id, setDetails) => {
        const store = getStore();
        const deal = store.deals.find((deal) => deal.id === id);
        if (!deal) {
          console.log("Deal not found!");
          return;
        }
        setDetails(deal);
        console.log("Deal details found successfully!");
      },
    },
  };
};

export default getState;

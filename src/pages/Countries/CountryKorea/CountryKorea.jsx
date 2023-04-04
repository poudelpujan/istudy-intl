import React from "react";

import { studyAbroadData } from "../../../components/Layouts/Cards/cardsContents/CardsContents";

const CountryKorea = () => {
  const countryData = studyAbroadData.find(
    (data) => data.title === "Study in Korea"
  );

  return (
    <section className="is__country korea">
      <div
        className="is__section-top-header"
        style={{
          backgroundImage: `url(${countryData.image})`,
        }}
      >
        <div className="is__country-title">
          <h1>{countryData.title}</h1>
        </div>
      </div>

      <div className="container">
        <div className="row single-page-content">
          <p>
            Studying and residing in South Korea can provide students with an
            opportunity to explore a vibrant and beautiful country. Whether it
            is discovering the bustling city of Seoul or exploring the country's
            stunning coastlines and rural areas, studying in South Korea offers
            a diverse range of fascinating sights and breathtaking views.
            Moreover, students can experience South Korea's rich and dynamic
            culture during their stay.
          </p>
          <br />
          <p>
            South Korea, also called the Republic of Korea, is located in East
            Asia on the southern part of the Korean Peninsula. It shares land
            borders with North Korea and sea borders with Japan and China. The
            country's terrain is mainly mountainous, with some coastal plains,
            rolling hills, river basins, and valleys. Its climate is humid
            continental and subtropical, characterized by four distinct
            seasons..
          </p>
          <br />
          <h3>Language in South Korea</h3>
          <p>
            South Korea's official language is Korean, which is spoken
            throughout the country due to the homogenous ethnic makeup of its
            population (excluding a small Chinese population). Although there
            are several dialects of the Korean language, they are similar enough
            that the majority of Koreans can comprehend them.
          </p>
          <br />
          <h3>Cost of Living in South Korea</h3>
          <p>
            The currency used in South Korea is the "won", and 1,061 won was
            equivalent to 1 U.S. dollar.
          </p>
          <br />
          <p>
            One can rent an apartment and participate in sports and recreational
            activities for a similar cost in South Korea as in many parts of the
            United States, depending on the location. However, grocery,
            clothing, private transportation, and apartment purchase prices are
            generally higher in South Korea compared to the U.S. On the other
            hand, public transportation, utilities, and restaurants are
            typically less expensive in South Korea than in the U.S. Overall,
            the cost of living in South Korea is slightly higher than in the
            United States, but salaries are slightly lower..
          </p>
          <br />
          <p>
            South Korea boasts a sophisticated transportation network that
            includes highways, bus routes, ships, and high-speed railroads. Air
            travel is also a popular means of transportation. It is worth noting
            that public transportation in South Korea is typically less
            expensive than in the U.S. However, owning a car and purchasing gas
            is more costly in South Korea than it is in the United States.
          </p>
          <br />
          <h3>South Korean Culture</h3>
          <p>
            Korean culture is heavily influenced by Confucianism and emphasizes
            the importance of family and community values within a hierarchical
            structure. The hierarchy is based on relationships among individuals
            and emphasizes the social importance and relevance of familial and
            communal ties.
          </p>
          <br />
          <p>
            In South Korea, maintaining harmony and positive relationships
            within families and between individuals is highly valued, and many
            Koreans focus on cultivating and preserving personal and familial
            "kibun". Kibun is a concept that cannot be directly translated into
            English, but generally encompasses feelings, emotions, pride, and
            reputation. South Koreans place great importance on maintaining
            social and cultural status, as well as personal and shared harmony,
            by paying diligent attention to and showing respect for kibun. This
            is particularly evident in many South Koreans' emphasis on
            establishing and maintaining harmony, a sense of peace, calm, and
            comfort in any situation, regardless of the circumstances.
          </p>
          <br />
          <h3>Food When you Study in South Korea</h3>
          <p>
            Staple foods in South Korea mainly consist of rice, vegetables,
            legumes such as soy and mung beans, and meats. Popular spices and
            flavors include sesame, ginger, garlic, spicy dried peppers, and
            fermented sauces, foods, and pastes. Local specialties and dishes
            are created by combining these foods and flavors. Typical dishes
            include soups, noodle dishes, stir-fried dishes, and raw dishes such
            as Miyeok guk, Baek Kimchi, Japchae, and Tangypyeongchae. During a
            meal, multiple dishes are usually served so that people can enjoy a
            variety of foods and flavors. Non-alcoholic drinks such as teas,
            sweet rice drinks, fruit punches, fermented grain juices, and herbal
            drinks, called eumcheongnyu, are usually served with meals. In
            addition to these, South Koreans also enjoy alcoholic beverages such
            as beers, rice wines, and Soju.
          </p>
          <br />
          <p>
            Much of South Korea's film and music culture is distinctive to the
            country. The nation is well-known for its locally-produced
            television dramas and mini-series, as well as having a
            widely-popular and well-developed film industry mainly consisting of
            domestically-made films. Popular music genres in South Korea include
            "K-Pop" and "run", both of which feature unique and vibrant sounds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountryKorea;

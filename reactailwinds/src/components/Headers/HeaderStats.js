import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-black md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="RANG"
                  statTitle="Joueur du dimanche"
                  statArrow="up"
                  statPercent="10"
                  statPercentColor="text-emerald-500"
                  statDescripiron="pts au dernier match"
                  statIconName="fas fa-trophy"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Nb Matchs"
                  statTitle="29"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron="dernier match joué : 29/10/2021"
                  statIconName="fas fa-futbol"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Taux de victoire"
                  statTitle="59%"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="depuis la saison 1 fmr cup"
                  statIconName="	fas fa-percent"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Equipe favorite"
                  statTitle="NLC - Courbevoie Club"
                  statArrow=""
                  statPercent=""
                  statPercentColor=""
                  statDescripiron="Attaquant"
                  statIconName="fas fa-users"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

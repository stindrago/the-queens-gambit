(ns queens-gambit-quotes.core
  (:require [reagent.core :as r :refer [atom]]
            [queens-gambit-quotes.quotes :as q]))

(def data (atom (rand-nth q/quotes)))

(defn quote []
  (def tweet-intent (str "https://twitter.com/intent/tweet?hashtags=queensgambit&text="
                         (get @data :quote) " ~ " (get @data :author)))
  [:div.cards>div.card
   [:h2.card-header.text-center "Queen's Gambit Quote"]
   [:div.card-body.text-center
    [:p#quote (get @data :quote)]
    [:p#author (get @data :author)]]
   [:div.card-footer.center.text-center
    [:button#twitter.outline>a#tweet
     {:href tweet-intent
      :target "_blank"}
     [:i.fi-social-twitter " Tweet"]]
    [:button#new-quote.outline
     {:on-click #(reset! data (rand-nth q/quotes))}
     [:i.fi-shuffle " New Quote"]]]])

(defn start []
  (r/render-component [quote]
                      (. js/document (getElementById "app"))))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))

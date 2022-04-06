using System;
using System.Collections.Generic;

namespace cards
{
    public class Player
    {
        public string name;
        public List<Card> hand;
        public Player(string playerName)
        {
            name = playerName;
            hand = new List<Card>();
        }
        public Card Draw(Deck deck)
        {
            Card topCard = deck.cards[0];
            hand.Add(deck.Deal());
            return topCard;
        }
    }
}
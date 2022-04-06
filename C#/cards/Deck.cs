using System;
using System.Collections.Generic;

namespace cards
{
    public class Deck 
    {
        public List<Card> cards;
        public Deck()
        {
            this.cards = new List<Card>();
            string[] suits = {"Hearts", "Clubs", "Diamonds", "Spades"};
            string[] names = { "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King" };
            int[] values = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };
            for (int i = 0; i < suits.Length; i++) 
            {
                for (int j = 0; j < names.Length; j++) 
                {
                    cards.Add(new Card(suits[i], names[j], values[j]));
                }
            }
        }
        public Card Deal()
        {
            Card temp = cards[0];
            cards.RemoveAt(0);
            return temp;
        }
        public void Shuffle()
        {
            List<Card> shuffleDeck = new List<Card>();
            while (cards.Count != 0) 
            {
                Random rand = new Random();
                int index = rand.Next(0,cards.Count);
                shuffleDeck.Add(cards[index]);
                cards.RemoveAt(index);
            }
            cards = shuffleDeck;
        }
        public void Reset()
        {
            List<Card> resetList = new List<Card>();
            string[] suits = {"Hearts", "Clubs", "Diamonds", "Spades"};
            string[] names = { "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King" };
            int[] values = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };
            for (int i = 0; i < suits.Length; i++) 
            {
                for (int j = 0; j < names.Length; j++) 
                {
                    resetList.Add(new Card(suits[i], names[j], values[j]));
                }
            }
            cards = resetList;
        }
    }
}
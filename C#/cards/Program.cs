using System;

namespace cards
{
    class Program
    {
        static void Main(string[] args)
        {
            // Card c1 = new Card("idk", "hearts", 4);
            // Console.WriteLine(c1.suit);
            Deck newDeck = new Deck();
            foreach (Card card in newDeck.cards) 
            {
                card.print();
            }
            newDeck.Shuffle();
            foreach (Card card in newDeck.cards) 
            {
                card.print();
            }
            Player bob = new Player("Bob");
            bob.Draw(newDeck);
            Console.WriteLine();
            bob.hand[0].print();
            Console.WriteLine();
            foreach (Card card in newDeck.cards) 
            {
                card.print();
            }
            Card c1 = bob.Draw(newDeck);
            Console.WriteLine(c1.suit);
        }
    }
}

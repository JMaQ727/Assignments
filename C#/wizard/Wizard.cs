using System;

namespace wizard
{
    class Wizard : Human
    {
        public Wizard(string n, int s, int d) : base(n, s, 25, d, 50)
        {
        }
        public override int Attack(Human target)
        {
            int dmg = intelligence * 5;
            target.changeHealth(dmg);
            this.changeHealth(-dmg);
            Console.WriteLine($"{this.name} attacked {target.name} for {dmg} damage and healed themself for {dmg} health.");
            return dmg;
        }
        public int Heal(Human target)
        {
            int amountHealed = intelligence * -10;
            target.changeHealth(amountHealed);
            Console.WriteLine($"{target.name} has been healed for {-amountHealed}.  Health is now {target.Health}.");
            return amountHealed;
        }
    }
}

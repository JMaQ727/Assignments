using System;

namespace collections
{
    class Program
    {
        public static Main(string[] args)
        {
            int[] arr2 = {1,5,10,7,-2};
            ShiftValues(arr2); 
        }
        public static ShiftValues(int[] arr)
        {
        for (int i = 0; i < arr.Length; i++) 
        {
            arr[i] = arr[i + 1];
            Console.WriteLine(arr[i]);
        }
        arr[arr.Length-1] = 0;
        }
    }
}

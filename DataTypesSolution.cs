using System;
using System.Collections.Generic;
using System.IO;

class Solution {
    static void Main(String[] args) {
        int i = 4;
        double d = 4.0;
        string s = "HackerRank ";

        
        // Declare second integer, double, and String variables.
        int a;
        double b;
        string NewString;
        
        // Read and save an integer, double, and String to your variables.
        a = Convert.ToInt32(Console.ReadLine()); 
        b = Convert.ToDouble(Console.ReadLine());
        NewString = Console.ReadLine();
        
        // Print the sum of both integer variables on a new line.
        Console.WriteLine(a + b);
        
        // Print the sum of the double variables on a new line.
        //"{0:F1}" is formatting for one decimal place
        Console.WriteLine("{0:F1}", d + b);
        
        // Concatenate and print the String variables on a new line
        // The 's' variable above should be printed first.
        Console.WriteLine(s + NewString);
        

    }

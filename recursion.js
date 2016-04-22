//Cracking Coding Interview

/*
_________________________________________________________________
8 1 Write a method to generate the nth Fibonacci number
_________________________________________________________________
*/




/*

8 2
Imagine a robot sitting on the upper left hand corner of an NxN grid The robot can only move in two directions: right and down How many possible paths are there for the robot?
FOLLOW UP
Imagine certain squares are “o  limits”, such that the robot can not step on them Design an algorithm to get all possible paths for the robot
_________________________________________________________________
*/




/*

8 3 Write a method that returns all subsets of a set
_________________________________________________________________
*/




/*
8 4 Write a method to compute all permutations of a string
_________________________________________________________________
*/




/*
8 5
Implement an algorithm to print all valid (e g , properly opened and closed) combi- nations of n-pairs of parentheses
SOLUTION

if (r > l) { // try a right paren, if there’s a matching left str[count] = ‘)’;
printPar(l, r - 1, str, count + 1); }
} }
public static void printPar(int count) { char[] str = new char[count*2];
printPar(count, count, str, 0); }
EXAMPLE:
input: 3 (e g , 3 pairs of parentheses) output: ()()(), ()(()), (())(), ((()))
_________________________________________________________________
*/




/*

8 6 Implement the “paint  ll” function that one might see on many image editing pro- grams That is, given a screen (represented by a 2-dimensional array of Colors), a point, and a new color,  ll in the surrounding area until you hit a border of that color
_________________________________________________________________
*/




/*

8 7 Given an in nite number of quarters (25 cents), dimes (10 cents), nickels (5 cents) and pennies (1 cent), write code to calculate the number of ways of representing n cents
_________________________________________________________________
*/




/*
8 8 Write an algorithm to print all ways of arranging eight queens on a chess board so that none of them share the same row, column or diagonal
_________________________________________________________________
*/




/*

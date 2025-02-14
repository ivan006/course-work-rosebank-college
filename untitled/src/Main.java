import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Ask the user for their name
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Ask the user for their age
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        // Ask the user for their favorite number
        System.out.print("Enter your favorite number: ");
        int favoriteNumber = scanner.nextInt();

        // Calculate the result
        int result = age * favoriteNumber;

        // Display the result
        System.out.println("\nHello, " + name + "!");
        System.out.println("Your age multiplied by your favorite number is: " + result);

    }
}
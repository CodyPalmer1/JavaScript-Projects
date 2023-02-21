package JavaPracticeProject;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FilePrinter {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.println("Usage: java FilePrinter <filename>");
            System.exit(1);
        }

        String filename = args[0];
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
            System.exit(1);
        }
    }
}

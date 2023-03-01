import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileProcessor {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.println("Usage: java FileProcessor <filename>");
            System.exit(1);
        }

        String filename = args[0];
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            int lineCount = 0;
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
                lineCount++;
            }
            System.out.println("Number of lines: " + lineCount);
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
            System.exit(1);
        }
    }
}

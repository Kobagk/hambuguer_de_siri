import java.io.IOException;
import java.util.Scanner;
 
public class arvore {
 
    public static void main(String[] args) throws IOException {
            Scanner leitor = new Scanner(System.in);

            int t = leitor.nextInt();

            int n[] = new int [t];

            int arvore = 0;

            for (int i = 0; i < t/2;i++){

                for (int j = 0; j < t - i - 1;j++){


                System.out.print(" ");

                

            }


            for (int k = 0; k < (2 * i + 1);k++){

            System.out.print("*");

    

            
        }

        System.out.println(" ");
            

        
    }
}
}
import java.io.IOException;
import java.util.Scanner;
 
public class abb {
 
    public static void main(String[] args) throws IOException {
            Scanner leitor = new Scanner(System.in);

            System.out.println("Quantas provas você realizou esse semestre");
            int t = leitor.nextInt();

            double n [] = new double[t];

            double soma = 0;

            for (int i = 0; i < t; i++){

                System.out.println("Digite a nota da sua " + (i+1) + "° prova");
                n [i]= leitor.nextDouble();
            

                while( n[i] < 0 || n[i] > 10){

                    System.out.println("Nota invalida");
                    System.out.println("Digite a nota novamente");

                    n [i]= leitor.nextDouble();

                    
                }

                soma = soma + n[i];


            }

            double media = soma/t;

            System.out.println(media);

            

        
    }
}
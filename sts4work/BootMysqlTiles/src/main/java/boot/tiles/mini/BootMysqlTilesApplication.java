package boot.tiles.mini;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"boot.*"})
@MapperScan("boot.data.mapper")
public class BootMysqlTilesApplication {

	public static void main(String[] args) {
		SpringApplication.run(BootMysqlTilesApplication.class, args);
	}

}

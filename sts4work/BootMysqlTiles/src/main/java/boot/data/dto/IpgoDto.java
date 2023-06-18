package boot.data.dto;

import java.security.Timestamp;

import org.apache.ibatis.type.Alias;

import lombok.Data;
@Data
@Alias("IpgoDto")
public class IpgoDto {

	private String num;
	private String sangpum;
	private String photoname;
	private String image;
	private int price;
	private Timestamp ipgoday;

}

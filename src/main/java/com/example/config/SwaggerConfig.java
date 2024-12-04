package com.example.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Backendetech API Documentation")
                        .version("1.0.0")
                        .description("Documentation de l'API pour Backendetech")
                        .contact(new Contact()
                                .name("SANDANIAINA TSINJO NANTOSOA")
                                .email("email@example.com")
                                .url("http://example.com")));
    }
}

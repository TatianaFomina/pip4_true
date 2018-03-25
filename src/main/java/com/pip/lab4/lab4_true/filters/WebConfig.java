package com.pip.lab4.lab4_true.filters;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.UrlBasedViewResolver;
import org.springframework.web.servlet.view.tiles3.TilesConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesView;
import org.springframework.web.servlet.view.tiles3.TilesViewResolver;


@Configuration
@ComponentScan(basePackages = "com.pip.lab4.lab4_true.controllers")
public class WebConfig extends WebMvcConfigurerAdapter {

//    @Bean
//    public UrlBasedViewResolver viewResolver() {
//        TilesViewResolver viewResolver = new TilesViewResolver();
//        viewResolver.setViewClass(TilesView.class);
//        viewResolver.setPrefix("/resources/static/");
//        viewResolver.setSuffix(".html");
//        viewResolver.setOrder(1);
//        return viewResolver;
//    }

    @Bean
    public FilterRegistrationBean accessFilter() {

        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(someFilter());

        registration.addUrlPatterns("/", "");
        //registration.addUrlPatterns(".");
        //registration.addInitParameter("paramName", "paramValue");
        registration.setName("AccessFilter");
        registration.setOrder(1);
        return registration;
    }

    public AccessFilter someFilter() {
        return new AccessFilter();
    }

//    @Bean
//    public TemplateResolver templateResolver(){
//        ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver();
//        templateResolver.setPrefix("/WEB-INF/view/");
//        templateResolver.setSuffix(".html");
//        templateResolver.setTemplateMode("HTML5");
//        return templateResolver;
//    }
//
//    @Bean
//    public SpringTemplateEngine templateEngine()
//    {
//        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
//        templateEngine.setTemplateResolver(templateResolver());
//        return templateEngine;
//    }
//
//    @Bean
//    public ViewResolver getViewResolver() {
//        ThymeleafViewResolver resolver = new ThymeleafViewResolver();
//        resolver.setTemplateEngine(templateEngine());
//        resolver.setOrder(1);
//        return resolver;
//    }
//

}

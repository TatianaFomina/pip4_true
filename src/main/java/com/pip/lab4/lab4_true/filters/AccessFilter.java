package com.pip.lab4.lab4_true.filters;

import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AccessFilter implements Filter {
    @Override
    public void destroy() {
        // ...
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        //
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpReq = (HttpServletRequest) request;
        HttpServletResponse httpResp = (HttpServletResponse) response;
        String[] tokens = httpReq.getRequestURI().split("\\.");
        //System.out.println("in filter, URI: " + httpReq.getRequestURI()+ " ext: "+tokens[tokens.length - 1]+"\nContextPath: " + httpReq.getContextPath());
        boolean loginRequest = httpReq.getRequestURI().equals("/signin");
        boolean loginFound = false;
        if((httpReq.getSession().getAttribute("username") != null) && !httpReq.getSession().getAttribute("username").equals(""))
            loginFound = true;
        //boolean loginRequest = httpReq.getRequestURI().equals(loginURI);
        if (/*loginCookieFound*/loginFound /*|| loginRequest || tokens[tokens.length - 1].equals("js") || tokens[tokens.length - 1].equals("css") || httpReq.getRequestURI().equals("/check_user") || httpReq.getRequestURI().equals("/check_username")|| httpReq.getRequestURI().equals("/go")*/) {
            chain.doFilter(request, response);
        } else {
            httpResp.sendRedirect(httpReq.getContextPath() + "/signin");
        }

    }

}

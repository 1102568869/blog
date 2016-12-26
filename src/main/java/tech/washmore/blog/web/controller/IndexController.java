package tech.washmore.blog.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Washmore
 * @version V1.0
 * @summary todo
 * @Copyright (c) 2016, Lianjia Group All Rights Reserved.
 * @since 2016/12/12
 */
@Controller
public class IndexController {
    @RequestMapping("/welcome")
    public String welcome() {
        return "redirect:/";
    }

    @RequestMapping({"/", ""})
    public String index() {
        return "/index";
    }

//    @RequestMapping({"/", ""})
//    public String welcome() {
//        return "/index";
//    }
}

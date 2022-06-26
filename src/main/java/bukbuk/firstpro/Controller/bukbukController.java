package bukbuk.firstpro.Controller;

import bukbuk.firstpro.model.BukMemberDTO;
import bukbuk.firstpro.model.BukReviewDTO;
import bukbuk.firstpro.model.BukServiceDTO;
import bukbuk.firstpro.repository.ServiceRepository;
import bukbuk.firstpro.service.BukServiceImpl;
import bukbuk.firstpro.service.BukServiceService;
import bukbuk.firstpro.service.MemberServiceImpl;
import bukbuk.firstpro.service.ReviewServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class bukbukController {

    @GetMapping("/home")
    public String test(){
        return "hello, world";
    }

    @GetMapping("/hello-mvc")
    public String helloMVC(){

        return "hello-template";
    }
    @Autowired
    BukServiceImpl bukService;

    @Autowired
    ReviewServiceImpl reviewService;

    @Autowired
    MemberServiceImpl memberService;

    //고객센터 문의글 전체출력
    @RequestMapping("/service")
    public Map<String, Object> list(HttpServletRequest request){
        List<BukServiceDTO> list = this.bukService.getServiceList();

        Map<String, Object> map = new HashMap<>();

        map.put("service", list);

        return map;
    }

    @RequestMapping("/book")
    public Map<String, Object> reviewList(@RequestParam("book_title") String book_title, HttpServletRequest request){
        List<BukReviewDTO> list = this.reviewService.getReviewList(book_title);

        Map<String, Object> map = new HashMap<>();

        map.put("review", list);

        return map;
    }

    //회원가입
    @RequestMapping("/sign")
    public int sign(BukMemberDTO dto) {
        int check = this.memberService.insertMember(dto);

        int sign = 0;

        if (check > 0){
            sign = 1;
        } else {
            System.out.println("회원가입 실패");
        }

        return sign;
    }

    //회원탈퇴
    @RequestMapping("/sign-delete")
    public void delete(@RequestParam("num") int num, HttpServletResponse response) throws IOException {
        int check = this.memberService.deleteMember(num);

        response.setContentType("text/html; charset=UTF-8");

        PrintWriter out = response.getWriter();

        if (check > 0) {
            this.memberService.updateSequence(num);

            out.println("<script>");
            out.println("alert('회원 삭제 성공')");
            out.println("location.href='member_list.do'");
            out.println("</script>");
        } else {
            out.println("<script>");
            out.println("alert('회원 삭제 실패')");
            out.println("history.back()");
            out.println("</script>");
        }
    }

    //로그인
    @RequestMapping("/login-ok")
    public int loginOk(@RequestParam("id") String id, @RequestParam("pwd") String pwd, HttpServletRequest request, HttpServletResponse response){
        BukMemberDTO dto = this.memberService.getMember(id);

        int logIn = 0;

        if (dto != null){
            if (pwd.equals(dto.getMem_pwd())){
                HttpSession session = request.getSession();

                session.setAttribute("mem_num", dto.getMem_num());

                logIn = 1;
            } else {   
                System.out.println("비밀번호 일치하지 않음");
            }
        } else{ //일치하는 아이디가 db에 없을 때
            System.out.println("회원가입된 아이디가 없음");
        }

        return logIn;
    }

}
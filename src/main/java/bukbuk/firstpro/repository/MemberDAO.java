package bukbuk.firstpro.repository;

import bukbuk.firstpro.model.BukMemberDTO;

public interface MemberDAO {
    //회원가입
    int insertMember(BukMemberDTO dto);
}
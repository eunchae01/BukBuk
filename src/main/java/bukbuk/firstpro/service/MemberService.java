package bukbuk.firstpro.service;

import bukbuk.firstpro.model.BukMemberDTO;

public interface MemberService {
    //회원가입
    int insertMember(BukMemberDTO dto);

    int deleteMember(int num);

    void updateSequence(int num);
}

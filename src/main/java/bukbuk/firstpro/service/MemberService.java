package bukbuk.firstpro.service;

import bukbuk.firstpro.model.BukMemberDTO;

public interface MemberService {
    //회원가입
    public int insertMember(BukMemberDTO dto);

    public int deleteMember(int num);

    public void updateSequence(int num);

    public BukMemberDTO getMember(String id);
}
